db.menusubtopiclandings.updateOne(
  { _id: ObjectId("654a63828068a106395b2bf9"), rules: { $exists: 1 } },
  {
    $pull: {
      "rules.$.location": {
        $in: ["97562"],
      },
    },
  }
);
