export class ContactsInMemoryDS {
  createDb() {
    let contacts = [
      {
        id: 1,
        name: 'Chocolate 0% lactose',
        email: 'Lacta',
        phone: {
          phoneNumber: 'Av. Brasil, 7225 - Zona 05, Maringá - PR '
        }
      },
      {
        id: 2,
        name: 'Sorvete 0% lactose',
        email: 'Garoto',
        phone: {
          phoneNumber: 'Av. Brasil, 7225 - Zona 05, Maringá - PR '
        }
      }
    ];
    return { contacts };
  }
}
