async function getUserData(user) {
  console.log(user);
  const token = await user.getIdToken(true);
  //console.log(token);
  const { email, uid, photoURL, metadata, displayName } = user;
  return {
    id: uid,
    email,
    token,
    photoURL,
    metadata,
    displayName,
  };
}

export { getUserData };
