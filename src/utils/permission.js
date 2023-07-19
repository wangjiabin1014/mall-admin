/**
 * 存储的是角色对应的权限名称
 */
const roleToRoute = {
    coustomer: [{ name: 'Product' }, { name: 'ProductAdd' }, { name: 'ProductList' }],
    admin: [{ name: 'Product' }, { name: 'ProductAdd' }, { name: 'ProductList' }, { name: 'Category' }]
}

/**
 * 过滤掉没有权限的路由
 * @param {*} role 
 * @param {*} routes 
 * @returns 
 */
export default function getMenuRoute(role, routes) {
    console.log(role, routes)
    const allowRoutesName = roleToRoute[role].map(item => item.name)
    const resultRoutes = routes.filter(route => {
        const children = route.children
        if (allowRoutesName.indexOf(route.name) !== -1) {
            route.children = children.filter(child => allowRoutesName.indexOf(child.name) !== -1)
            return true
        }
        return false
    })
    return resultRoutes
}
