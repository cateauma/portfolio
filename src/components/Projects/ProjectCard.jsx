import React from "react";
import { Link } from "react-router-dom";
import Card from "../Ui/Card";
import Badge from "../Ui/Badge";
import ImageWithFallback from "../Ui/ImageWithFallback";
import Button from "../Ui/Button";
import { ExternalLink, FileText } from "lucide-react";

export default function ProjectCard({
  title,
  description,
  image,
  mockupUrl,
  notesPath,   // internal route
  status = "In Progress",
  onClick
}) {
  return (
    <Card className="group cursor-pointer">
      {/* CLICKABLE AREA */}
      <div onClick={onClick}>
        <div className="aspect-video overflow-hidden bg-slate-100">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-slate-900 text-lg font-semibold">{title}</h3>
            <Badge variant="secondary">{status}</Badge>
          </div>

          <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="p-6 pt-0 flex items-center gap-4">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            window.open(mockupUrl, "_blank", "noopener,noreferrer");
          }}
          className="w-full flex items-center gap-2"
        >
          <ExternalLink className="w-4 h-4" />
          View Mockup
        </Button>

        {/* INTERNAL ROUTE FOR NOTES */}
        {notesPath && (
          <Link
            to={notesPath}
            onClick={(e) => e.stopPropagation()}
            className="w-full"
          >
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Read Notes
            </Button>
          </Link>
        )}
      </div>
    </Card>
  );
}
