this.garage = {
    table: 'garage table'
};

class createRoom {
    constructor(name) {
        this.table = `${name}s table`
    }
    cleanTable(soap) {
        console.log(`cleaning ${this.table} using ${soap}`)
    }
}

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

jillsRoom.cleanTable('some soap');
johnsRoom.cleanTable('some saop');