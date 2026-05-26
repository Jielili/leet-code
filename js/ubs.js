function base64DecodeUtf8(base64) {
    const binary = atob(base64); // 解码为 Latin1 字符串
    const bytes = Uint8Array.from(binary, c => c.charCodeAt(0)); // 转成字节数组
    const decoder = new TextDecoder(); // 默认 UTF-8
    return decoder.decode(bytes); // 解码成 UTF-8 字符串
}

// const base64 = "MjkAVgAxMgBmYWxzZQAzMQAAMzIAZmFsc2UAMzMAdHJ1ZQAzNAB0cnVlADM1ADEAMgBUUl9DYXNoUG9zdGluZ3MAMzYAVkFMVUUAMzcAdHJ1ZQA2AEFJADI3AExPTkcAMzgAADM5AGZhbHNlADI4ADEANDAAADIxAHRydWUANQBWODhCSERXNVQ0UzRUN1ZBADQxAGZhbHNlADEwAGZhbHNlADEzAGZhbHNlADQyADMwMAA2MAAAMTQAdHJ1ZQA2MQAANDMAMDYuMDYuMjAyNQAyNABmYWxzZQA0NAAxADQ1AERTQwA2MwAANjIAADQ2ADIAMTkAdHJ1ZQA1NwBjc3YANDcAADQ4ADEANDkAdHJ1ZQ==    ";
// const base64 = "OTAAQgAxMgBmYWxzZQA5MgAAOTMAZmFsc2UAOTQAdHJ1ZQA5NQB0cnVlADgxADEAMgBUUl9DYXNoUG9zdGluZ3MAOTYAQk9PSwA5NwB0cnVlADUAQUkANwBMT05HADk4AAA5OQBmYWxzZQA4ADEAMTAwAAAyNAB0cnVlADQAVjM4QjRTQUgyU05KR1BGQQAxMDEAZmFsc2UAMjAAZmFsc2UAMTMAZmFsc2UAMTAyADMwMAAyMQB0cnVlADEwMwAxNC4wNS4yMDI1ADMwAGZhbHNlADEwNAAxADEwNQBEU0MAMTg3AAAxMDYAMzAAMjMAdHJ1ZQAxMDcAADQ4ADEAMTA4AHRydWU=";
const base64 = "OTAAVgAxMgBmYWxzZQA5MgAAOTMAZmFsc2UAOTQAZmFsc2UAOTUAdHJ1ZQA4MQAxADIAVFJfQ2FzaFBvc3RpbmdzADk2AFZBTFVFADk3AHRydWUANQBBSQA3AExPTkcAOTgAADk5AGZhbHNlADgAMQAxMDAAADI0AHRydWUANABWMzhCNFNBSDJTTkpHUEZBADEwMQBmYWxzZQAyMABmYWxzZQAxMwBmYWxzZQAxMDIAMzAwADE2NwAAMjEAdHJ1ZQAxNjgAADEwMwAwNi4wNi4yMDI1ADMwAGZhbHNlADEwNAAxADEwNQBEU0MAMTg3AAAxNjkAADEwNgAyADIzAHRydWUAMjA2ADAAMTEyAGNzdgAxMDcAADQ4ADEAMTA4AHRydWU=";
console.log(base64DecodeUtf8(base64));

['9', 'B', '92', '', 'TR_CashPostings', '3', 'true', '103', '14.05.2025', '96', 'BOOK', '5', 'AI', '6', '105', 'DSC', '187', '', '106', '30', '7', 'LONG', '23', 'true', '98', '', '81', '99', 'false', '0', '', '1', 'false', '48', '14', 'V38B4SAH2SNJGPFA', '101', 'false']
['9', 'B', '12', 'false', '92', '', '93', 'false', '94', 'true', '95', 'true', '81', '12', 'TR_CashPostings', '96', 'BOOK', '97', 'true', '5', 'AI', '7', 'LONG', '98', '', '99', 'false', '81', '100', '', '24', 'true', '4', 'V38B4SAH2SNJGPFA', '101', 'false', '20', 'false', '13', 'false', '102', '300', '21', 'true', '103', '14.05.2025', '30', 'false', '104', '1', '105', 'DSC', '187', '', '106', '30', '23', 'true', '107', '', '48', '1', '108', 'true']
['8', 'V', '12', 'false', '92', '', '93', 'false', '94', 'false', '95', 'true', '81', '12', 'TR_CashPostings', '96', 'VALUE', '97', 'true', '5', 'AI', '7', 'LONG', '98', '', '99', 'false', '81', '100', '', '24', 'true', '4', 'V38B4SAH2SNJGPFA', '101', 'false', '20', 'false', '13', 'false', '102', '300', '167', '21', 'true', '168', '103', '14.05.2025', '30', 'false', '104', '1', '105', 'DSC', '187', '', '169', '106', '30', '23', 'true', '206', '0', '107', '48', '1', '108', 'true']
['8', 'V', '12', 'false', '92', '', '93', 'false', '94', 'false', '95', 'true', '81', '12', 'TR_CashPostings', '96', 'VALUE', '97', 'true', '5', 'AI', '7', 'LONG', '98', '', '99', 'false', '81', '100', '', '24', 'true', '4', 'V38B4SAH2SNJGPFA', '101', 'false', '20', 'false', '13', 'false', '102', '300', '167', '21', 'true', '168', '103', '06.06.2025', '30', 'false', '104', '1', '105', 'DSC', '187', '', '169', '106', '30', '223', 'true', '206', '0', '112', 'csv', '107', '48', '1', '108', 'true']
