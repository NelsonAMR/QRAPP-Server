import QRCode from "qrcode";

const generateQR = async (id) => {
  const opts = {
    // errorCorrectionLevel: "H",
    type: "image/png",
    scale: 15,
    // quality: 0.3,
    margin: 1,
    // color: {
    //   dark: "#010599FF",
    //   light: "#FFBF60FF",
    // },
  };

  try {
    const qr = await QRCode.toDataURL(id, opts);
    return qr;
  } catch (error) {
    console.error(error);
  }
};

export default generateQR;
