import Table from "ascii-table";

const table = new Table('Route Table');

const routes = (app) => {

// Apply the rate limiting middleware to all requests
    app.use((err, req, res, next) => {
        console.log(err);
        res.status(500).json('Something broke!')
    })
    app.use((req, res) => {
        res.status(404).json('Not found')
    })

    app.use((req, res, next) => {
        res.status(403).json('Forbidden')
    })

    const COLUMNS_NAME = ['Root Path', 'Method', 'Path'];
    table.setHeading(...COLUMNS_NAME);

    [].forEach(router => {
        router.route.stack.forEach(layer => {
            if (layer.route) {
                const {path, methods} = layer.route;
                Object.keys(methods).forEach(method => {
                    table.addRow(router.name, method.toUpperCase(), path);
                })
            }
        })

        //     set empty row
        table.addRow();
    })

    console.log(table.toString());
}


export default routes;