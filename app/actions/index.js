const uid = () => Math.random().toString(34).slice(2);

export function addFavoriteContact(contact) {
  return {
    type: 'ADD_FAVORITE_CONTACT',
    contact
  };
}

