import Cookie from 'js-cookie'

/**
 * 
 * @param {Options} info 
 */
export function setCookie(info) {
    const arr = Object.entries(info)
    for (let i = 0; i < arr.length; i++) {
        Cookie.set(arr[i][0], arr[i][1])
    }
    return true
}

/**
 * 获取用户的cookie信息
 */
export function getUserCookie() {
    return {
        username: Cookie.get('username'),
        appkey: Cookie.get('appkey'),
        role: Cookie.get('role'),
        email: Cookie.get('email')
    }
}

/**
 * 
 * 移除cookie
 */
export function removeUserCookie() {
    Cookie.remove('username')
    Cookie.remove('appokey')
    Cookie.remove('role')
    Cookie.remove('email')
    return true
}

