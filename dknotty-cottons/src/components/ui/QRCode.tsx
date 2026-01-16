"use client";

import { QRCodeSVG } from "qrcode.react";
import { Card } from "./Card";

interface QRCodeProps {
  url: string;
  label?: string;
  size?: number;
}

export function QRCode({ url, label = "Scan Me", size = 120 }: QRCodeProps) {
  return (
    <Card className="inline-flex flex-col items-center gap-3 p-4 bg-white">
      <QRCodeSVG
        value={url}
        size={size}
        bgColor="#FFFFFF"
        fgColor="#8B7355"
        level="M"
      />
      <span className="text-sm font-medium text-brand-brown">{label}</span>
    </Card>
  );
}
