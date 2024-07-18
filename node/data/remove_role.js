db.menusubtopiclandings.updateOne(
  {
    _id: ObjectId("654a63898068a106395b2bf9"),
  },
  {
    $unset: {
      "rules.0.roleUser.0.ASP": ["All"],
    },
  }
);