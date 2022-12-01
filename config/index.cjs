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

  PROVINCE: '江苏',
  CITY: '南京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onBIn6pLNVryXQEhII3EUZHa-3sM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '41jN5TTmnp5_LW7KzKxE2jiT8kBCuklfHEeywE7Uydk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '9-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2001', date: '08-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '狗子', year: '2001', date: '10-02',
        },
        {
          type: '节日', name: '相识纪念日', year: '2021', date: '09-03',
        },
      ],

    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '41jN5TTmnp5_LW7KzKxE2jiT8kBCuklfHEeywE7Uydk',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onBIn6msn5XCyOnRG5wa8HC93MlY',
    }
  ],

}

module.exports = USER_CONFIG



