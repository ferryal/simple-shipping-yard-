class ShippingYard {
    constructor() {
        if (this.constructor == ShippingYard) {
            throw new Error("Abstract classes can't be instantiated.")
        }
    }

    name() {
        throw new Error(`Method ${name()}`);
    }

    type() {
        throw new Error(`Method ${type()}`);
    }

    capacity() {
        throw new Error(`Method ${capacity()}`);
    }
}

class PerahuMotor extends ShippingYard {
    name() {
        console.log('Perahu Motor')
    }

    type() {
        console.log('Kapal Kecil')
    }

    capacity() {
        console.log('15 Orang');
    }
}

class PerahuLayar extends ShippingYard {
    name() {
        console.log('Perahu Layar')
    }

    type() {
        console.log('Kapal Sedang')
    }

    capacity() {
        console.log('6 Orang')
    }
}

class KapalPesiar extends ShippingYard {
    name() {
        console.log('Kapal Pesiar')
    }

    type() {
        console.log('Kapal Besar')
    }

    capacity() {
        console.log('150 Orang')
    }
}

var PM = new PerahuMotor;
PM.name();
PM.type();
PM.capacity();