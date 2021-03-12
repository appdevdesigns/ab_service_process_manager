/**
 * status
 * our Request handler.
 */

module.exports = {
   /**
    * Key: the cote message key we respond to.
    */
   key: "process_manager.userform.status",

   /**
    * inputValidation
    * define the expected inputs to this service handler:
    * Format:
    * "parameterName" : {
    *    {joi.fn}   : {bool},  // performs: joi.{fn}();
    *    {joi.fn}   : {
    *       {joi.fn1} : true,   // performs: joi.{fn}().{fn1}();
    *       {joi.fn2} : { options } // performs: joi.{fn}().{fn2}({options})
    *    }
    *    // examples:
    *    "required" : {bool},  // default = false
    *
    *    // custom:
    *        "validation" : {fn} a function(value, {allValues hash}) that
    *                       returns { error:{null || {new Error("Error Message")} }, value: {normalize(value)}}
    * }
    */
   inputValidation: {
      formID: { string: { uuid: true }, required: true },
   },

   /**
    * fn
    * our Request handler.
    * @param {obj} req
    *        the request object sent by the api_sails/api/controllers/process_manager/status.
    * @param {fn} cb
    *        a node style callback(err, results) to send data when job is finished
    */
   fn: function handler(req, cb) {
      //
      req.log("in process_manager.userform.status.");

      var uuid = req.param("formID");

      var UserForm = req.model("UserForm");
      UserForm.find({ uuid })
         .then((list) => {
            if (list && list.length > 0) {
               cb(null, list[0]);
            } else {
               cb(null, null);
            }
         })
         .catch(cb);
   },
};
