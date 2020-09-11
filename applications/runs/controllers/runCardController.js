const knex = require("../../../db/knex");

let runCardController = {};

// 10개였는지 확인하기
runCardController.read = function (req, res) {
    let pageNum = req.query.page;
    let offset = pageNum > 1 ? 10 * (pageNum - 1) : 0;
  
    knex("run")
      .select("run.runId", "run.runName", "run.state", "run.updated_at", "project.projectName") // db 수정 후 run.updatedAt 변경
      .join("project", "run.projectId", "project.projectId")
      .limit(10).offset(offset)  
      .then((runCardList) => {
        res.json(runCardList);
      });
}

module.exports = runCardController;