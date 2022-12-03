/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe0e8e6505f4180ed',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e0ebb654f533523c52dd5f601c80909c',

  

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onBIn6msn5XCyOnRG5wa8HC93MlY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      province: '江苏',
  city: '南京',
      useTemplateId: 'K4lVST1Rxo0EevlcRQ3psJ9hrcFo_ETZS6Ts1AISgfg',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '08-05',
        },
         {
          type: '*生日', name: '狗子', year: '2001', date: '10-02',
        },
      ],
customizedDateList: [
        // 相识的日子
        { keyword: 'love_day', date: '2021-11-06' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'YWUouMkfWQF1rDw8BPo7lFBxtPXGDZ3c2gjPODoZYZ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onBIn6msn5XCyOnRG5wa8HC93MlY',
    }
  ],

}

module.exports = USER_CONFIG



