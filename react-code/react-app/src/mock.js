import Mock from 'mockjs'

const domain  = '/api/'

Mock.mock(domain + 'login', function(){
    let result ={
        code: 200,
        message: 'OK',
        data: {
            lgoinUid: 10000,
            nickname: '兔子先生',
            token: 'yyds2024' 
        }
    }

    return result
})