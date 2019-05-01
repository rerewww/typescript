interface Shape {
	width?: number;
	getArea(): number;
}

class Circle implements Shape {
	width: number;
	private height: number;

	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	getArea(): number {
		return this.width * this.height;
	}
}

// interface Indexable {
// 	[key: string]: any;
// }

const dict = {
	foo: 1,
	bar: 2
};

interface numberOperation {
	(arg1:number, arg2: number): number;
};

const sum: numberOperation = (arg1: number, arg2: number): number => {
	return arg1 + arg2;
};

const multiply: numberOperation = (arg1, arg2) => {
	return arg1 * arg2;
};

console.log('multiply: ', multiply(1, 2));

Object.keys(dict).forEach(k => console.log(dict[k]));

const circle = new Circle(5, 5);
console.log('circle area: ', circle.getArea());

class Rect {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		this.width = width;
		this.height = height;
	}

	getWidth(): number {
		return this.width;
	}

	getHeight(): number {
		return this.height;
	}

	getArea(): number {
		return this.width * this.height;
	}

	setHeight(height: number) {
		this.height = height;
	}
};

const abc = new Rect(10, 10);
console.log(abc.getWidth());
console.log(abc.getArea());
