interface Actor {
	id: string;
	name: string;
}


interface Action {
	id: string;
	name: string;
	object: string;
}


interface Log {
	id: string;
	actor: Actor;
	action: Action;
	date: string;
	occurred_at: string;
}


export default Log;