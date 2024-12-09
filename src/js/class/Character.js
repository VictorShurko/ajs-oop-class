export default class Character {
    constructor(name, type, attack, defence){
        const types = [
            'Bowman',
            'Swordsman',
            'Magician',
            'Daemon',
            'Undead',
            'Zombie',
        ];

        if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
            throw new Error('Name должно быть строкой, min - 2 символа, max - 10');
        }

        if (typeof type !== 'string' || !types.includes(type)) {
            throw new Error(`Type должен один из типов (строка): ${types.join(', ')}`);
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
}