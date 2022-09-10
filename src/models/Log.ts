interface Actor {
	id: string;
	name: string;
}


interface Action {
	id: string;
	name: string;
	object: string;
}


interface MetaData {
    redirect: string;
    description: string;
    x_request_id: string;
}



interface Log {
	id: string;
	actor: Actor;
	action: Action;
	target: Action;
	date: string;
	occurred_at: string;
	metaData: MetaData
}


export default Log;