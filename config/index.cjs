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
      name: '娜娜公主',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onBIn6pLNVryXQEhII3EUZHa-3sM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      province: '江苏',
  city: '南京',
      useTemplateId: 'eOm2oZW8uJVueOAzFkNayEaAdAk7if91BMpn9rSObbY',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '09-21',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '娜娜公主', year: '2001', date: '08-05',
        },
         {
          type: '*生日', name: '禄禄王子', year: '2001', date: '10-02',
        },
      ],
customizedDateList: [
        // 相识的日子
        { keyword: 'love_day', date: '2021-11-06' },
      ],
    },
  
{
      name: '罗怡公主',
      id: 'onBIn6vJGNk564uk36J7rhSQv1JI',
      useTemplateId: 'SXvoV3DAKWpf5fBCeorRS2bh2n2r5VrAijmKNm_lAxM',
      province: '海南',
      city: '海口',
      horoscopeDate: '04-19',
      horoscopeDateType: '',
      openUrl: 'https://wangxinleo.cn',
      festivals: [{
          type: '*生日', name: '罗怡公主', year: '1998', date: '08-05',
        },{
          type: '*生日', name: '海狗国王', year: '2001', date: '10-02'
        },{
          type: '*生日', name: '洋子王子', year: '2002', date: '12-23',
        },],
      customizedDateList: [{ keyword: 'love_day', date: '2021-03-30' },],
      courseSchedule: null
    },
    {
      name: '海狗国王',
      id: 'onBIn6msn5XCyOnRG5wa8HC93MlY',
      useTemplateId: 'ZJyxf-zXLD57wlUw3km3quvDR0UCcJeJaQlPTrlqpZo',
      province: '黑龙江',
      city: '牡丹江',
      horoscopeDate: '11-16',
      horoscopeDateType: '',
      openUrl: 'https://wangxinleo.cn',
      festivals: [{
          type: '*生日', name: '罗怡公主', year: '1998', date: '08-05',
        },{
          type: '*生日', name: '海狗国王', year: '2001', date: '10-02'
        },{
          type: '*生日', name: '洋子王子', year: '2002', date: '12-23',
        },],
      customizedDateList: [{ keyword: 'love_day', date: '2001-11-16'},],
      courseSchedule: null
    },
    {
      name: '洋子王子',
      id: 'onBIn6q0mO4ydWRu6xiKWZO194N4',
      useTemplateId: 'DkprwIKZW6DIzUEBpNEuKbQLa9VHpJcoq1R6AC7PY0k',
      province: '黑龙江',
      city: '佳木斯',
      horoscopeDate: '02-07',
      horoscopeDateType: '',
      openUrl: 'https://wangxinleo.cn',
      festivals: [{
          type: '*生日', name: '罗怡公主', year: '1998', date: '08-05',
        },{
          type: '*生日', name: '海狗国王', year: '2001', date: '10-02'
        },{
          type: '*生日', name: '洋子王子', year: '2002', date: '12-23',
        },],
      customizedDateList: [{ keyword: 'love_day', date: '2020-10-10' },],
      courseSchedule: null
    }
    ],

  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'YWUouMkfWQF1rDw8BPo7lFBxtPXGDZ3c2gjPODoZYZY',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'onBIn6msn5XCyOnRG5wa8HC93MlY',
    }
  ],

}

module.exports = USER_CONFIG



