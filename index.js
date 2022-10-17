//-----------------------------------------------------------------------------
// NodeJS App for GCP Cloud Functions deployed via GCP Cloud Build Triggers
// Copyleft (c) by Denis Astahov
//-----------------------------------------------------------------------------

exports.helloWorld = (req, res) => {
  const message="<font color='blue'>СloudFunction test for prod!</font><br><b>App Version 1.4</b>";
  res.status(200).send(message);
};
