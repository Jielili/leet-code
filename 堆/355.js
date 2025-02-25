
var Twitter = function() {
    this.post_map = new Map()
	this.follow_map = new Map()
	this.post_size = 0
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
	this.post_size = (this.post_size + 1) % 1000000000
	const set = this.post_map.get(userId) || new Set()
	set.add({id: tweetId, time: new Date().getTime() + `_${this.post_size.toString().padStart(9, '0')}`})
	this.post_map.set(userId, set)
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {

	const newest = []
	const own_posts = this.post_map.get(userId)
	own_posts.forEach(item => push_to_newest(item))

	const following = this.follow_map.get(userId) || []
	following.forEach(following_userid => {
		const posts = this.post_map.get(following_userid) || []
		posts.forEach(item => push_to_newest(item))
	})

	return newest.sort((a,b) => b.time > a.time ? 1 : -1).map(item => item.id)

	function push_to_newest(item) {
		if (newest.length < 10) {
			newest.push(item)
			bubbleUp(newest)
		} else if (item.time > newest[0].time) {
			[newest[9], newest[0]] = [newest[0], newest[9]]
			newest.pop()
			bubbleDown(newest)
			newest.push(item)
			bubbleUp(newest)
		}
	}


	function bubbleUp(heap) {
		let cur = heap.length - 1, parent = (cur - 1) >> 1
		while (cur > 0 && heap[cur].time < heap[parent].time) {
			[heap[cur], heap[parent]] = [heap[parent], heap[cur]]
			cur = parent
			parent = (cur - 1) >> 1
		}
	}

	function bubbleDown(heap) {
		let cur = 0, left = cur * 2 + 1, right = cur * 2 + 2
		const len = heap.length
		while (left < len) {
			let smallest = cur
			if (heap[left].time < heap[smallest].time) smallest = left
			if (right < len && heap[right].time < heap[smallest].time) smallest = right

			if (smallest === cur) break
			
			[heap[smallest], heap[cur]] = [heap[cur], heap[smallest]]
			cur = smallest
			left = cur * 2 + 1
			right = cur * 2 + 2
		}
	}
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
	const set = this.follow_map.get(followerId) || new Set()
	set.add(followeeId)
	this.follow_map.set(followerId, set)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
	if (this.follow_map.has(followerId)) {
		this.follow_map.get(followerId).delete(followeeId)
	}
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */


// ["Twitter", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "postTweet", "getNewsFeed"]
// [[],[1,5],[1,3],[1,101],[1,13],[1,10],[1,2],[1,94],[1,505],[1,333],[1,22],[1,11],[1]]

const twitter = new Twitter()
twitter.postTweet(1, 5)
twitter.postTweet(1, 3)
twitter.postTweet(1, 101)
twitter.postTweet(1, 13)
twitter.postTweet(1, 10)
twitter.postTweet(1, 2)
twitter.postTweet(1, 94)
twitter.postTweet(1, 505)
twitter.postTweet(1, 333)
twitter.postTweet(1, 22)
twitter.postTweet(1, 11)
console.log(twitter.getNewsFeed(1))