const CLOUD_NAME = "dg68vqtpn";

export const cloudVideo = (publicId: string) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/video/upload/${publicId}`;
};

export const cloudImage = (publicId: string) => {
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/${publicId}`;
};