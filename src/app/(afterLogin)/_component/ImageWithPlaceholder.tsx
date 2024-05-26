import {getBase64} from '../_lib/getBase64';
import Image from "next/image";

async function ImageWithPlaceholder({ src }: { src: string }) {
  const { base64, img } = await getBase64(src);

  return (
    <Image
      src={src}
      alt={src}
      fill
      sizes='100%'
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}

export default ImageWithPlaceholder;