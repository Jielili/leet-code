/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const heap = []
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            heap.push(nums[i])
            bubbleUp(heap)
        } else if (nums[i] > heap[0]) {
            heap[0] = nums[i]
            bubbleDown(heap)
        }
    }
    return heap[0]
};

var bubbleUp = function (heap) {
    let cur = heap.length - 1
    let parent = (cur - 1) >> 1
    while (cur > 0 && heap[cur] < heap[parent]) {
        [heap[cur], heap[parent]] = [heap[parent], heap[cur]]
        cur = parent
        parent = (cur - 1) >> 1
    }
}

var bubbleDown = function (heap) {
    const len = heap.length
    let cur = 0, left = cur * 2 + 1, right = cur * 2 + 2
    while (left < len) {
        let smallest = cur
        if (heap[smallest] > heap[left]) smallest = left
        if (right < len && heap[smallest] > heap[right]) smallest = right

        if (smallest === cur) break
        [heap[smallest], heap[cur]] = [heap[cur], heap[smallest]]
        cur = smallest
        left = cur * 2 + 1
        right = cur * 2 + 2
    }
}

console.log(findKthLargest([-1,2,0], 2))
console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))
console.log(findKthLargest([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10))
const arr = [4999,4998,4997,4996,4995,4994,4993,4992,4991,4990,4989,4988,4987,4986,4985,4984,4983,4982,4981,4980,4979,4978,4977,4976,4975,4974,4973,4972,4971,4970,4969,4968,4967,4966,4965,4964,4963,4962,4961,4960,4959,4958,4957,4956,4955,4954,4953,4952,4951,4950,4949,4948,4947,4946,4945,4944,4943,4942,4941,4940,4939,4938,4937,4936,4935,4934,4933,4932,4931,4930,4929,4928,4927,4926,4925,4924,4923,4922,4921,4920,4919,4918,4917,4916,4915,4914,4913,4912,4911,4910,4909,4908,4907,4906,4905,4904,4903,4902,4901,4900,4899,4898,4897,4896,4895,4894,4893,4892,4891,4890,4889,4888,4887,4886,4885,4884,4883,4882,4881,4880,4879,4878,4877,4876,4875,4874,4873,4872,4871,4870,4869,4868,4867,4866,4865,4864,4863,4862,4861,4860,4859,4858,4857,4856,4855,4854,4853,4852,4851,4850,4849,4848,4847,4846,4845,4844,4843,4842,4841,4840,4839,4838,4837,4836,4835,4834,4833,4832,4831,4830,4829,4828,4827,4826,4825,4824,4823,4822,4821,4820,4819,4818,4817,4816,4815,4814,4813,4812,4811,4810,4809,4808,4807,4806,4805,4804,4803,4802,4801,4800,4799,4798,4797,4796,4795,4794,4793,4792,4791,4790,4789,4788,4787,4786,4785,4784,4783,4782,4781,4780,4779,4778,4777,4776,4775,4774,4773,4772,4771,4770,4769,4768,4767,4766,4765,4764,4763,4762,4761,4760,4759,4758,4757,4756,4755,4754,4753,4752,4751,4750,4749,4748,4747,4746,4745,4744,4743,4742,4741,4740,4739,4738,4737,4736,4735,4734,4733,4732,4731,4730,4729,4728,4727,4726,4725,4724,4723,4722,4721,4720,4719,4718,4717,4716,4715,4714,4713,4712,4711,4710,4709,4708,4707,4706,4705,4704,4703,4702,4701,4700,4699,4698,4697,4696,4695,4694,4693,4692,4691,4690,4689,4688,4687,4686,4685,4684,4683,4682,4681,4680,4679,4678,4677,4676,4675,4674,4673,4672,4671,4670,4669,4668,4667,4666,4665,4664,4663,4662,4661,4660,4659,4658,4657,4656,4655,4654,4653,4652,4651,4650,4649,4648,4647,4646,4645,4644,4643,4642,4641,4640,4639,4638,4637,4636,4635,4634,4633,4632,4631,4630,4629,4628,4627,4626,4625,4624,4623,4622,4621,4620,4619,4618,4617,4616,4615,4614,4613,4612,4611,4610,4609,4608,4607,4606,4605,4604,4603,4602,4601,4600,4599,4598,4597,4596,4595,4594,4593,4592,4591,4590,4589,4588,4587,4586,4585,4584,4583,4582,4581,4580,4579,4578,4577,4576,4575,4574,4573,4572,4571,4570,4569,4568,4567,4566,4565,4564,4563,4562,4561,4560,4559,4558,4557,4556,4555,4554,4553,4552,4551,4550,4549,4548,4547,4546,4545,4544,4543,4542,4541,4540,4539,4538,4537,4536,4535,4534,4533,4532,4531,4530,4529,4528,4527,4526,4525,4524,4523,4522,4521,4520,4519,4518,4517,4516,4515,4514,4513,4512,4511,4510,4509,4508,4507,4506,4505,4504,4503,4502,4501,4500,4499,4498,4497,4496,4495,4494,4493,4492,4491,4490,4489,4488,4487,4486,4485,4484,4483,4482,4481,4480,4479,4478,4477,4476,4475,4474,4473,4472,4471,4470,4469,4468,4467,4466,4465,4464,4463,4462,4461,4460,4459,4458,4457,4456,4455,4454,4453,4452,4451,4450,4449,4448,4447,4446,4445,4444,4443,4442,4441,4440,4439,4438,4437,4436,4435,4434,4433,4432,4431,4430,4429,4428,4427,4426,4425,4424,4423,4422,4421,4420,4419,4418,4417,4416,4415,4414,4413,4412,4411,4410,4409,4408,4407,4406,4405,4404,4403,4402,4401,4400,4399,4398,4397,4396,4395,4394,4393,4392,4391,4390,4389,4388,4387,4386,4385,4384,4383,4382,4381,4380,4379,4378,4377,4376,4375,4374,4373,4372,4371,4370,4369,4368,4367,4366,4365,4364,4363,4362,4361,4360,4359,4358,4357,4356,4355,4354,4353,4352,4351,4350,4349,4348,4347,4346,4345,4344,4343,4342,4341,4340,4339,4338,4337,4336,4335,4334,4333,4332,4331,4330,4329,4328,4327,4326,4325,4324,4323,4322,4321,4320,4319,4318,4317,4316,4315,4314,4313,4312,4311,4310,4309,4308,4307,4306,4305,4304,4303,4302,4301,4300,4299,4298,4297,4296,4295,4294,4293,4292,4291,4290,4289,4288,4287,4286,4285,4284,4283,4282,4281,4280,4279,4278,4277,4276,4275,4274,4273,4272,4271,4270,4269,4268,4267,4266,4265,4264,4263,4262,4261,4260,4259,4258,4257,4256,4255,4254,4253,4252,4251,4250,4249,4248,4247,4246,4245,4244,4243,4242,4241,4240,4239,4238,4237,4236,4235,4234,4233,4232,4231,4230,4229,4228,4227,4226,4225,4224,4223,4222,4221,4220,4219,4218,4217,4216,4215,4214,4213,4212,4211,4210,4209,4208,4207,4206,4205,4204,4203,4202,4201,4200,4199,4198,4197,4196,4195,4194,4193,4192,4191,4190,4189,4188,4187,4186,4185,4184,4183,4182,4181,4180,4179,4178,4177,4176,4175,4174,4173,4172,4171,4170,4169,4168,4167,4166,4165,4164,4163,4162,4161,4160,4159,4158,4157,4156,4155,4154,4153,4152,4151,4150,4149,4148,4147,4146,4145,4144,4143,4142,4141,4140,4139,4138,4137,4136,4135,4134,4133,4132,4131,4130,4129,4128,4127,4126,4125,4124,4123,4122,4121,4120,4119,4118,4117,4116,4115,4114,4113,4112,4111,4110,4109,4108,4107,4106,4105,4104,4103,4102,4101,4100,4099,4098,4097,4096,4095,4094,4093,4092,4091,4090,4089,4088,4087,4086,4085,4084,4083,4082,4081,4080,4079,4078,4077,4076,4075,4074,4073,4072,4071,4070,4069,4068,4067,4066,4065,4064,4063,4062,4061,4060,4059,4058,4057,4056,4055,4054,4053,4052,4051,4050,4049,4048,4047,4046,4045,4044,4043,4042,4041,4040,4039,4038,4037,4036,4035,4034,4033,4032,4031,4030,4029,4028,4027,4026,4025,4024,4023,4022,4021,4020,4019,4018,4017,4016,4015,4014,4013,4012,4011,4010,4009,4008,4007,4006,4005,4004,4003,4002,4001,4000,3999,3998,3997,3996,3995,3994,3993,3992,3991,3990,3989,3988,3987,3986,3985,3984,3983,3982,3981,3980,3979,3978,3977,3976,3975,3974,3973,3972,3971,3970,3969,3968,3967,3966,3965,3964,3963,3962,3961,3960,3959,3958,3957,3956,3955,3954,3953,3952,3951,3950,3949,3948,3947,3946,3945,3944,3943,3942,3941,3940,3939,3938,3937,3936,3935,3934,3933,3932,3931,3930,3929,3928,3927,3926,3925,3924,3923,3922,3921,3920,3919,3918,3917,3916,3915,3914,3913,3912,3911,3910,3909,3908,3907,3906,3905,3904,3903,3902,3901,3900,3899,3898,3897,3896,3895,3894,3893,3892,3891,3890,3889,3888,3887,3886,3885,3884,3883,3882,3881,3880,3879,3878,3877,3876,3875,3874,3873,3872,3871,3870,3869,3868,3867,3866,3865,3864,3863,3862,3861,3860,3859,3858,3857,3856,3855,3854,3853,3852,3851,3850,3849,3848,3847,3846,3845,3844,3843,3842,3841,3840,3839,3838,3837,3836,3835,3834,3833,3832,3831,3830,3829,3828,3827,3826,3825,3824,3823,3822,3821,3820,3819,3818,3817,3816,3815,3814,3813,3812,3811,3810,3809,3808,3807,3806,3805,3804,3803,3802,3801,3800,3799,3798,3797,3796,3795,3794,3793,3792,3791,3790,3789,3788,3787,3786,3785,3784,3783,3782,3781,3780,3779,3778,3777,3776,3775,3774,3773,3772,3771,3770,3769,3768,3767,3766,3765,3764,3763,3762,3761,3760,3759,3758,3757,3756,3755,3754,3753,3752,3751,3750,3749,3748,3747,3746,3745,3744,3743,3742,3741,3740,3739,3738,3737,3736,3735,3734,3733,3732,3731,3730,3729,3728,3727,3726,3725,3724,3723,3722,3721,3720,3719,3718,3717,3716,3715,3714,3713,3712,3711,3710,3709,3708,3707,3706,3705,3704,3703,3702,3701,3700,3699,3698,3697,3696,3695,3694,3693,3692,3691,3690,3689,3688,3687,3686,3685,3684,3683,3682,3681,3680,3679,3678,3677,3676,3675,3674,3673,3672,3671,3670,3669,3668,3667,3666,3665,3664,3663,3662,3661,3660,3659,3658,3657,3656,3655,3654,3653,3652,3651,3650,3649,3648,3647,3646,3645,3644,3643,3642,3641,3640,3639,3638,3637,3636,3635,3634,3633,3632,3631,3630,3629,3628,3627,3626,3625,3624,3623,3622,3621,3620,3619,3618,3617,3616,3615,3614,3613,3612,3611,3610,3609,3608,3607,3606,3605,3604,3603,3602,3601,3600,3599,3598,3597,3596,3595,3594,3593,3592,3591,3590,3589,3588,3587,3586,3585,3584,3583,3582,3581,3580,3579,3578,3577,3576,3575,3574,3573,3572,3571,3570,3569,3568,3567,3566,3565,3564,3563,3562,3561,3560,3559,3558,3557,3556,3555,3554,3553,3552,3551,3550,3549,3548,3547,3546,3545,3544,3543,3542,3541,3540,3539,3538,3537,3536,3535,3534,3533,3532,3531,3530,3529,3528,3527,3526,3525,3524,3523,3522,3521,3520,3519,3518,3517,3516,3515,3514,3513,3512,3511,3510,3509,3508,3507,3506,3505,3504,3503,3502,3501,3500,3499,3498,3497,3496,3495,3494,3493,3492,3491,3490,3489,3488,3487,3486,3485,3484,3483,3482,3481,3480,3479,3478,3477,3476,3475,3474,3473,3472,3471,3470,3469,3468,3467,3466,3465,3464,3463,3462,3461,3460,3459,3458,3457,3456,3455,3454,3453,3452,3451,3450,3449,3448,3447,3446,3445,3444,3443,3442,3441,3440,3439,3438,3437,3436,3435,3434,3433,3432,3431,3430,3429,3428,3427,3426,3425,3424,3423,3422,3421,3420,3419,3418,3417,3416,3415,3414,3413,3412,3411,3410,3409,3408,3407,3406,3405,3404,3403,3402,3401,3400,3399,3398,3397,3396,3395,3394,3393,3392,3391,3390,3389,3388,3387,3386,3385,3384,3383,3382,3381,3380,3379,3378,3377,3376,3375,3374,3373,3372,3371,3370,3369,3368,3367,3366,3365,3364,3363,3362,3361,3360,3359,3358,3357,3356,3355,3354,3353,3352,3351,3350,3349,3348,3347,3346,3345,3344,3343,3342,3341,3340,3339,3338,3337,3336,3335,3334,3333,3332,3331,3330,3329,3328,3327,3326,3325,3324,3323,3322,3321,3320,3319,3318,3317,3316,3315,3314,3313,3312,3311,3310,3309,3308,3307,3306,3305,3304,3303,3302,3301,3300,3299,3298,3297,3296,3295,3294,3293,3292,3291,3290,3289,3288,3287,3286,3285,3284,3283,3282,3281,3280,3279,3278,3277,3276,3275,3274,3273,3272,3271,3270,3269,3268,3267,3266,3265,3264,3263,3262,3261,3260,3259,3258,3257,3256,3255,3254,3253,3252,3251,3250,3249,3248,3247,3246,3245,3244,3243,3242,3241,3240,3239,3238,3237,3236,3235,3234,3233,3232,3231,3230,3229,3228,3227,3226,3225,3224,3223,3222,3221,3220,3219,3218,3217,3216,3215,3214,3213,3212,3211,3210,3209,3208,3207,3206,3205,3204,3203,3202,3201,3200,3199,3198,3197,3196,3195,3194,3193,3192,3191,3190,3189,3188,3187,3186,3185,3184,3183,3182,3181,3180,3179,3178,3177,3176,3175,3174,3173,3172,3171,3170,3169,3168,3167,3166,3165,3164,3163,3162,3161,3160,3159,3158,3157,3156,3155,3154,3153,3152,3151,3150,3149,3148,3147,3146,3145,3144,3143,3142,3141,3140,3139,3138,3137,3136,3135,3134,3133,3132,3131,3130,3129,3128,3127,3126,3125,3124,3123,3122,3121,3120,3119,3118,3117,3116,3115,3114,3113,3112,3111,3110,3109,3108,3107,3106,3105,3104,3103,3102,3101,3100,3099,3098,3097,3096,3095,3094,3093,3092,3091,3090,3089,3088,3087,3086,3085,3084,3083,3082,3081,3080,3079,3078,3077,3076,3075,3074,3073,3072,3071,3070,3069,3068,3067,3066,3065,3064,3063,3062,3061,3060,3059,3058,3057,3056,3055,3054,3053,3052,3051,3050,3049,3048,3047,3046,3045,3044,3043,3042,3041,3040,3039,3038,3037,3036,3035,3034,3033,3032,3031,3030,3029,3028,3027,3026,3025,3024,3023,3022,3021,3020,3019,3018,3017,3016,3015,3014,3013,3012,3011,3010,3009,3008,3007,3006,3005,3004,3003,3002,3001,3000,2999,2998,2997,2996,2995,2994,2993,2992,2991,2990,2989,2988,2987,2986,2985,2984,2983,2982,2981,2980,2979,2978,2977,2976,2975,2974,2973,2972,2971,2970,2969,2968,2967,2966,2965,2964,2963,2962,2961,2960,2959,2958,2957,2956,2955,2954,2953,2952,2951,2950,2949,2948,2947,2946,2945,2944,2943,2942,2941,2940,2939,2938,2937,2936,2935,2934,2933,2932,2931,2930,2929,2928,2927,2926,2925,2924,2923,2922,2921,2920,2919,2918,2917,2916,2915,2914,2913,2912,2911,2910,2909,2908,2907,2906,2905,2904,2903,2902,2901,2900,2899,2898,2897,2896,2895,2894,2893,2892,2891,2890,2889,2888,2887,2886,2885,2884,2883,2882,2881,2880,2879,2878,2877,2876,2875,2874,2873,2872,2871,2870,2869,2868,2867,2866,2865,2864,2863,2862,2861,2860,2859,2858,2857,2856,2855,2854,2853,2852,2851,2850,2849,2848,2847,2846,2845,2844,2843,2842,2841,2840,2839,2838,2837,2836,2835,2834,2833,2832,2831,2830,2829,2828,2827,2826,2825,2824,2823,2822,2821,2820,2819,2818,2817,2816,2815,2814,2813,2812,2811,2810,2809,2808,2807,2806,2805,2804,2803,2802,2801,2800,2799,2798,2797,2796,2795,2794,2793,2792,2791,2790,2789,2788,2787,2786,2785,2784,2783,2782,2781,2780,2779,2778,2777,2776,2775,2774,2773,2772,2771,2770,2769,2768,2767,2766,2765,2764,2763,2762,2761,2760,2759,2758,2757,2756,2755,2754,2753,2752,2751,2750,2749,2748,2747,2746,2745,2744,2743,2742,2741,2740,2739,2738,2737,2736,2735,2734,2733,2732,2731,2730,2729,2728,2727,2726,2725,2724,2723,2722,2721,2720,2719,2718,2717,2716,2715,2714,2713,2712,2711,2710,2709,2708,2707,2706,2705,2704,2703,2702,2701,2700,2699,2698,2697,2696,2695,2694,2693,2692,2691,2690,2689,2688,2687,2686,2685,2684,2683,2682,2681,2680,2679,2678,2677,2676,2675,2674,2673,2672,2671,2670,2669,2668,2667,2666,2665,2664,2663,2662,2661,2660,2659,2658,2657,2656,2655,2654,2653,2652,2651,2650,2649,2648,2647,2646,2645,2644,2643,2642,2641,2640,2639,2638,2637,2636,2635,2634,2633,2632,2631,2630,2629,2628,2627,2626,2625,2624,2623,2622,2621,2620,2619,2618,2617,2616,2615,2614,2613,2612,2611,2610,2609,2608,2607,2606,2605,2604,2603,2602,2601,2600,2599,2598,2597,2596,2595,2594,2593,2592,2591,2590,2589,2588,2587,2586,2585,2584,2583,2582,2581,2580,2579,2578,2577,2576,2575,2574,2573,2572,2571,2570,2569,2568,2567,2566,2565,2564,2563,2562,2561,2560,2559,2558,2557,2556,2555,2554,2553,2552,2551,2550,2549,2548,2547,2546,2545,2544,2543,2542,2541,2540,2539,2538,2537,2536,2535,2534,2533,2532,2531,2530,2529,2528,2527,2526,2525,2524,2523,2522,2521,2520,2519,2518,2517,2516,2515,2514,2513,2512,2511,2510,2509,2508,2507,2506,2505,2504,2503,2502,2501,2500,2499,2498,2497,2496,2495,2494,2493,2492,2491,2490,2489,2488,2487,2486,2485,2484,2483,2482,2481,2480,2479,2478,2477,2476,2475,2474,2473,2472,2471,2470,2469,2468,2467,2466,2465,2464,2463,2462,2461,2460,2459,2458,2457,2456,2455,2454,2453,2452,2451,2450,2449,2448,2447,2446,2445,2444,2443,2442,2441,2440,2439,2438,2437,2436,2435,2434,2433,2432,2431,2430,2429,2428,2427,2426,2425,2424,2423,2422,2421,2420,2419,2418,2417,2416,2415,2414,2413,2412,2411,2410,2409,2408,2407,2406,2405,2404,2403,2402,2401,2400,2399,2398,2397,2396,2395,2394,2393,2392,2391,2390,2389,2388,2387,2386,2385,2384,2383,2382,2381,2380,2379,2378,2377,2376,2375,2374,2373,2372,2371,2370,2369,2368,2367,2366,2365,2364,2363,2362,2361,2360,2359,2358,2357,2356,2355,2354,2353,2352,2351,2350,2349,2348,2347,2346,2345,2344,2343,2342,2341,2340,2339,2338,2337,2336,2335,2334,2333,2332,2331,2330,2329,2328,2327,2326,2325,2324,2323,2322,2321,2320,2319,2318,2317,2316,2315,2314,2313,2312,2311,2310,2309,2308,2307,2306,2305,2304,2303,2302,2301,2300,2299,2298,2297,2296,2295,2294,2293,2292,2291,2290,2289,2288,2287,2286,2285,2284,2283,2282,2281,2280,2279,2278,2277,2276,2275,2274,2273,2272,2271,2270,2269,2268,2267,2266,2265,2264,2263,2262,2261,2260,2259,2258,2257,2256,2255,2254,2253,2252,2251,2250,2249,2248,2247,2246,2245,2244,2243,2242,2241,2240,2239,2238,2237,2236,2235,2234,2233,2232,2231,2230,2229,2228,2227,2226,2225,2224,2223,2222,2221,2220,2219,2218,2217,2216,2215,2214,2213,2212,2211,2210,2209,2208,2207,2206,2205,2204,2203,2202,2201,2200,2199,2198,2197,2196,2195,2194,2193,2192,2191,2190,2189,2188,2187,2186,2185,2184,2183,2182,2181,2180,2179,2178,2177,2176,2175,2174,2173,2172,2171,2170,2169,2168,2167,2166,2165,2164,2163,2162,2161,2160,2159,2158,2157,2156,2155,2154,2153,2152,2151,2150,2149,2148,2147,2146,2145,2144,2143,2142,2141,2140,2139,2138,2137,2136,2135,2134,2133,2132,2131,2130,2129,2128,2127,2126,2125,2124,2123,2122,2121,2120,2119,2118,2117,2116,2115,2114,2113,2112,2111,2110,2109,2108,2107,2106,2105,2104,2103,2102,2101,2100,2099,2098,2097,2096,2095,2094,2093,2092,2091,2090,2089,2088,2087,2086,2085,2084,2083,2082,2081,2080,2079,2078,2077,2076,2075,2074,2073,2072,2071,2070,2069,2068,2067,2066,2065,2064,2063,2062,2061,2060,2059,2058,2057,2056,2055,2054,2053,2052,2051,2050,2049,2048,2047,2046,2045,2044,2043,2042,2041,2040,2039,2038,2037,2036,2035,2034,2033,2032,2031,2030,2029,2028,2027,2026,2025,2024,2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004,2003,2002,2001,2000,1999,1998,1997,1996,1995,1994,1993,1992,1991,1990,1989,1988,1987,1986,1985,1984,1983,1982,1981,1980,1979,1978,1977,1976,1975,1974,1973,1972,1971,1970,1969,1968,1967,1966,1965,1964,1963,1962,1961,1960,1959,1958,1957,1956,1955,1954,1953,1952,1951,1950,1949,1948,1947,1946,1945,1944,1943,1942,1941,1940,1939,1938,1937,1936,1935,1934,1933,1932,1931,1930,1929,1928,1927,1926,1925,1924,1923,1922,1921,1920,1919,1918,1917,1916,1915,1914,1913,1912,1911,1910,1909,1908,1907,1906,1905,1904,1903,1902,1901,1900,1899,1898,1897,1896,1895,1894,1893,1892,1891,1890,1889,1888,1887,1886,1885,1884,1883,1882,1881,1880,1879,1878,1877,1876,1875,1874,1873,1872,1871,1870,1869,1868,1867,1866,1865,1864,1863,1862,1861,1860,1859,1858,1857,1856,1855,1854,1853,1852,1851,1850,1849,1848,1847,1846,1845,1844,1843,1842,1841,1840,1839,1838,1837,1836,1835,1834,1833,1832,1831,1830,1829,1828,1827,1826,1825,1824,1823,1822,1821,1820,1819,1818,1817,1816,1815,1814,1813,1812,1811,1810,1809,1808,1807,1806,1805,1804,1803,1802,1801,1800,1799,1798,1797,1796,1795,1794,1793,1792,1791,1790,1789,1788,1787,1786,1785,1784,1783,1782,1781,1780,1779,1778,1777,1776,1775,1774,1773,1772,1771,1770,1769,1768,1767,1766,1765,1764,1763,1762,1761,1760,1759,1758,1757,1756,1755,1754,1753,1752,1751,1750,1749,1748,1747,1746,1745,1744,1743,1742,1741,1740,1739,1738,1737,1736,1735,1734,1733,1732,1731,1730,1729,1728,1727,1726,1725,1724,1723,1722,1721,1720,1719,1718,1717,1716,1715,1714,1713,1712,1711,1710,1709,1708,1707,1706,1705,1704,1703,1702,1701,1700,1699,1698,1697,1696,1695,1694,1693,1692,1691,1690,1689,1688,1687,1686,1685,1684,1683,1682,1681,1680,1679,1678,1677,1676,1675,1674,1673,1672,1671,1670,1669,1668,1667,1666,1665,1664,1663,1662,1661,1660,1659,1658,1657,1656,1655,1654,1653,1652,1651,1650,1649,1648,1647,1646,1645,1644,1643,1642,1641,1640,1639,1638,1637,1636,1635,1634,1633,1632,1631,1630,1629,1628,1627,1626,1625,1624,1623,1622,1621,1620,1619,1618,1617,1616,1615,1614,1613,1612,1611,1610,1609,1608,1607,1606,1605,1604,1603,1602,1601,1600,1599,1598,1597,1596,1595,1594,1593,1592,1591,1590,1589,1588,1587,1586,1585,1584,1583,1582,1581,1580,1579,1578,1577,1576,1575,1574,1573,1572,1571,1570,1569,1568,1567,1566,1565,1564,1563,1562,1561,1560,1559,1558,1557,1556,1555,1554,1553,1552,1551,1550,1549,1548,1547,1546,1545,1544,1543,1542,1541,1540,1539,1538,1537,1536,1535,1534,1533,1532,1531,1530,1529,1528,1527,1526,1525,1524,1523,1522,1521,1520,1519,1518,1517,1516,1515,1514,1513,1512,1511,1510,1509,1508,1507,1506,1505,1504,1503,1502,1501,1500,1499,1498,1497,1496,1495,1494,1493,1492,1491,1490,1489,1488,1487,1486,1485,1484,1483,1482,1481,1480,1479,1478,1477,1476,1475,1474,1473,1472,1471,1470,1469,1468,1467,1466,1465,1464,1463,1462,1461,1460,1459,1458,1457,1456,1455,1454,1453,1452,1451,1450,1449,1448,1447,1446,1445,1444,1443,1442,1441,1440,1439,1438,1437,1436,1435,1434,1433,1432,1431,1430,1429,1428,1427,1426,1425,1424,1423,1422,1421,1420,1419,1418,1417,1416,1415,1414,1413,1412,1411,1410,1409,1408,1407,1406,1405,1404,1403,1402,1401,1400,1399,1398,1397,1396,1395,1394,1393,1392,1391,1390,1389,1388,1387,1386,1385,1384,1383,1382,1381,1380,1379,1378,1377,1376,1375,1374,1373,1372,1371,1370,1369,1368,1367,1366,1365,1364,1363,1362,1361,1360,1359,1358,1357,1356,1355,1354,1353,1352,1351,1350,1349,1348,1347,1346,1345,1344,1343,1342,1341,1340,1339,1338,1337,1336,1335,1334,1333,1332,1331,1330,1329,1328,1327,1326,1325,1324,1323,1322,1321,1320,1319,1318,1317,1316,1315,1314,1313,1312,1311,1310,1309,1308,1307,1306,1305,1304,1303,1302,1301,1300,1299,1298,1297,1296,1295,1294,1293,1292,1291,1290,1289,1288,1287,1286,1285,1284,1283,1282,1281,1280,1279,1278,1277,1276,1275,1274,1273,1272,1271,1270,1269,1268,1267,1266,1265,1264,1263,1262,1261,1260,1259,1258,1257,1256,1255,1254,1253,1252,1251,1250,1249,1248,1247,1246,1245,1244,1243,1242,1241,1240,1239,1238,1237,1236,1235,1234,1233,1232,1231,1230,1229,1228,1227,1226,1225,1224,1223,1222,1221,1220,1219,1218,1217,1216,1215,1214,1213,1212,1211,1210,1209,1208,1207,1206,1205,1204,1203,1202,1201,1200,1199,1198,1197,1196,1195,1194,1193,1192,1191,1190,1189,1188,1187,1186,1185,1184,1183,1182,1181,1180,1179,1178,1177,1176,1175,1174,1173,1172,1171,1170,1169,1168,1167,1166,1165,1164,1163,1162,1161,1160,1159,1158,1157,1156,1155,1154,1153,1152,1151,1150,1149,1148,1147,1146,1145,1144,1143,1142,1141,1140,1139,1138,1137,1136,1135,1134,1133,1132,1131,1130,1129,1128,1127,1126,1125,1124,1123,1122,1121,1120,1119,1118,1117,1116,1115,1114,1113,1112,1111,1110,1109,1108,1107,1106,1105,1104,1103,1102,1101,1100,1099,1098,1097,1096,1095,1094,1093,1092,1091,1090,1089,1088,1087,1086,1085,1084,1083,1082,1081,1080,1079,1078,1077,1076,1075,1074,1073,1072,1071,1070,1069,1068,1067,1066,1065,1064,1063,1062,1061,1060,1059,1058,1057,1056,1055,1054,1053,1052,1051,1050,1049,1048,1047,1046,1045,1044,1043,1042,1041,1040,1039,1038,1037,1036,1035,1034,1033,1032,1031,1030,1029,1028,1027,1026,1025,1024,1023,1022,1021,1020,1019,1018,1017,1016,1015,1014,1013,1012,1011,1010,1009,1008,1007,1006,1005,1004,1003,1002,1001,1000,999,998,997,996,995,994,993,992,991,990,989,988,987,986,985,984,983,982,981,980,979,978,977,976,975,974,973,972,971,970,969,968,967,966,965,964,963,962,961,960,959,958,957,956,955,954,953,952,951,950,949,948,947,946,945,944,943,942,941,940,939,938,937,936,935,934,933,932,931,930,929,928,927,926,925,924,923,922,921,920,919,918,917,916,915,914,913,912,911,910,909,908,907,906,905,904,903,902,901,900,899,898,897,896,895,894,893,892,891,890,889,888,887,886,885,884,883,882,881,880,879,878,877,876,875,874,873,872,871,870,869,868,867,866,865,864,863,862,861,860,859,858,857,856,855,854,853,852,851,850,849,848,847,846,845,844,843,842,841,840,839,838,837,836,835,834,833,832,831,830,829,828,827,826,825,824,823,822,821,820,819,818,817,816,815,814,813,812,811,810,809,808,807,806,805,804,803,802,801,800,799,798,797,796,795,794,793,792,791,790,789,788,787,786,785,784,783,782,781,780,779,778,777,776,775,774,773,772,771,770,769,768,767,766,765,764,763,762,761,760,759,758,757,756,755,754,753,752,751,750,749,748,747,746,745,744,743,742,741,740,739,738,737,736,735,734,733,732,731,730,729,728,727,726,725,724,723,722,721,720,719,718,717,716,715,714,713,712,711,710,709,708,707,706,705,704,703,702,701,700,699,698,697,696,695,694,693,692,691,690,689,688,687,686,685,684,683,682,681,680,679,678,677,676,675,674,673,672,671,670,669,668,667,666,665,664,663,662,661,660,659,658,657,656,655,654,653,652,651,650,649,648,647,646,645,644,643,642,641,640,639,638,637,636,635,634,633,632,631,630,629,628,627,626,625,624,623,622,621,620,619,618,617,616,615,614,613,612,611,610,609,608,607,606,605,604,603,602,601,600,599,598,597,596,595,594,593,592,591,590,589,588,587,586,585,584,583,582,581,580,579,578,577,576,575,574,573,572,571,570,569,568,567,566,565,564,563,562,561,560,559,558,557,556,555,554,553,552,551,550,549,548,547,546,545,544,543,542,541,540,539,538,537,536,535,534,533,532,531,530,529,528,527,526,525,524,523,522,521,520,519,518,517,516,515,514,513,512,511,510,509,508,507,506,505,504,503,502,501,500,499,498,497,496,495,494,493,492,491,490,489,488,487,486,485,484,483,482,481,480,479,478,477,476,475,474,473,472,471,470,469,468,467,466,465,464,463,462,461,460,459,458,457,456,455,454,453,452,451,450,449,448,447,446,445,444,443,442,441,440,439,438,437,436,435,434,433,432,431,430,429,428,427,426,425,424,423,422,421,420,419,418,417,416,415,414,413,412,411,410,409,408,407,406,405,404,403,402,401,400,399,398,397,396,395,394,393,392,391,390,389,388,387,386,385,384,383,382,381,380,379,378,377,376,375,374,373,372,371,370,369,368,367,366,365,364,363,362,361,360,359,358,357,356,355,354,353,352,351,350,349,348,347,346,345,344,343,342,341,340,339,338,337,336,335,334,333,332,331,330,329,328,327,326,325,324,323,322,321,320,319,318,317,316,315,314,313,312,311,310,309,308,307,306,305,304,303,302,301,300,299,298,297,296,295,294,293,292,291,290,289,288,287,286,285,284,283,282,281,280,279,278,277,276,275,274,273,272,271,270,269,268,267,266,265,264,263,262,261,260,259,258,257,256,255,254,253,252,251,250,249,248,247,246,245,244,243,242,241,240,239,238,237,236,235,234,233,232,231,230,229,228,227,226,225,224,223,222,221,220,219,218,217,216,215,214,213,212,211,210,209,208,207,206,205,204,203,202,201,200,199,198,197,196,195,194,193,192,191,190,189,188,187,186,185,184,183,182,181,180,179,178,177,176,175,174,173,172,171,170,169,168,167,166,165,164,163,162,161,160,159,158,157,156,155,154,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,125,124,123,122,121,120,119,118,117,116,115,114,113,112,111,110,109,108,107,106,105,104,103,102,101,100,99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60,59,58,57,56,55,54,53,52,51,50,49,48,47,46,45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]
console.log(findKthLargest(arr, 5000))