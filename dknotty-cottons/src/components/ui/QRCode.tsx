"use client";

import { QRCodeSVG } from "qrcode.react";
import { Card } from "./Card";

interface QRCodeProps {
  url: string;
  label?: string;
  size?: number;
  className?: string;
}

export function QRCode({
  url,
  label = "Scan Me",
  size = 120,
  className = "",
}: QRCodeProps) {
  return (
    <Card className={`inline-flex flex-col items-center p-4 ${className}`}>
      <div className="bg-white p-3 rounded-lg">
        <QRCodeSVG
          value={url}
          size={size}
          level="M"
          bgColor="#FFFFFF"
          fgColor="#8B7355"
        />
      </div>
      <span className="mt-3 text-sm font-medium text-brand-brown">{label}</span>
    </Card>
  );
}
