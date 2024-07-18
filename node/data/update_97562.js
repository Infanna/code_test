db.menusubtopiclandings.updateOne(
  {
    _id: ObjectId("654a63828068a106395b2bf9"),
  },
  {
    $push: {
      "rules.0.location": {
        $each: ["97562"]
      },
    },
  }
);
