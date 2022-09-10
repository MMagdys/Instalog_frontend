const routes = {
    logs: {
        list: '/events',
        show: (id: string) => `/events/${id}`
    }
}


export default routes;