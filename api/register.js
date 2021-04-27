import request from '@/utils/request'

export default{
    // 根据手机号验证码
    sendCode(phone){
        return request({
            url: `edumsm/msm/send/${phone}`,
            method: 'get'
        })
    },
    registerMember(formItem){
        return request({
            url: `educenter/member/register`,
            method: 'post',
            data: formItem
        })
    }
}