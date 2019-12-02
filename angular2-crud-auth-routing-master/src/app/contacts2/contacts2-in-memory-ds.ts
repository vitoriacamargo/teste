export class ContactsInMemoryDS {
  createDb() {
    let contacts2 = [
      {
        id: 1,
        name: 'Pão sem glúten',
        email: 'Panco',
        phone: {
          phoneNumber: 'Av. Brasil, 7225 - Zona 05, Maringá - PR '
        }
      },
      {
        id: 2,
        name: 'Bolo sem glúten',
        email: 'Bolos da Paz',
        phone: {
          phoneNumber: 'Av. Brasil, 7225 - Zona 05, Maringá - PR '
        }
      }
    ];
    return { contacts2 };
  }
}
