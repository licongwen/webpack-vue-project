
export default{
    routes:[
        {
            path:'/',
            redirect:'/firstpage'
        },
        {
            path:'/firstpage',
            component:resolved=>require(['../components/index.vue'],resolved)
        },
        {
            path:'/imagepage',
            component:resolved=>require(['../components/image.vue'],resolved)
        },
        {
            path:'/test',
            component:resolved=>require(['../components/test.vue'],resolved)
        }
    ]
}