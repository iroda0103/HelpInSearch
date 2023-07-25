const express = require("express");
const Finding = require("./_Model");
const httpValidator = require("../../shared/httpValidator");
const addFinding = require("./add-finding");
const { postFindingSchema } = require("./_schema");
const getFindings = require("./get-findings");
const { writeFile } = require("fs");
const path = require("path");
const fs = require("fs");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction\} next
 */
const getFinding = async (req, res, next) => {
  try {
    console.log(req.query);
    const findings = await getFindings(req.query);
    res.status(200).json({
      data: findings,
    });
  } catch (err) {
    next(err);
  }
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction\} next
 */
const postFindings = async (req, res, next) => {
  try {
    httpValidator(req.body, postFindingSchema);
    console.log(req.body, req.file);

    // if (req.file) {
    //   let imgPath = req.file.originalname;

    //   await fs.writeFile(
    //     path.join( `./upload`, imgPath, req.file.buffer,(err) => {
    //       if (err) {
    //         console.log(err);
    //       }
    //     })
    //   );

    //   // req.body.img = imgPath;
    // }

    const findings = addFinding(req.body);

    res.status(200).json({
      data: "findings",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getFinding,
  postFindings,
};
