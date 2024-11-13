const personCard = {
    name: 'Carl',
    familyName: '',
    phoneNumber: '+123456789',
    email: '123@456.com'
  };


  const contactsNote = {
    1: {name: 'Debora', familyName: '', phoneNumber: '+12358795', email: '18978@456.com'},
    2: {name: 'Simon', familyName: '', phoneNumber: '++56897851', email: '6598@456.com'}
}
  

  //console.log(contactsNote)
  const contactsList = Object.values(contactsNote)
  console.log(contactsList)
  let surchName = prompt(`Contact Name`)
  const userName = contactsList.filter(contacts => contacts.name === surchName)

  
  //const personCard1 = Object.values(personCard)
 // console.log(personCard1)
  contactsList.push(personCard);
  console.log(contactsList)

 
