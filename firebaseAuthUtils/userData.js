async function getUserData(user) {
  console.log(user);
  const  = await user.getId(true);
  //console.log();
  const { email, uid, photoURL, metadata, displayName } = user;
  return {
    id: uid,
    email,
    ,
    photoURL,
    metadata,
    displayName,
  };
}

export { getUserData };
