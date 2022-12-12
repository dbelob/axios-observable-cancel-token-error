import { createServer } from 'miragejs';

export function makeServer({environment = "test"} = {}) {
    return createServer({
        environment,
        routes() {
            this.namespace = 'api';

            this.get('/hello/message', (schema, request) => {
                const name = request.queryParams.name;

                return 'Hey, ' + ((name) ? name : 'world');
            });
        }
    })
}
