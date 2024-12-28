import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link_to_proj: string;
}

export function ProjectCard({ img, title, desc, link_to_proj }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography placeholder=""
            onPointerEnterCapture={() => { }}
            onPointerLeaveCapture={() => { }} variant="h5" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography placeholder=""
          onPointerEnterCapture={() => { }}
          onPointerLeaveCapture={() => { }} className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Link href={link_to_proj}>
          <Button color="gray" size="sm">
            See details
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
