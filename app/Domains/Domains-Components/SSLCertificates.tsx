type SSLCertificatesProps = {
  data: {
    sslCertificates: {
      id: number;
      domain: string;
      issued: string;
      expires: string;
      status: string;
    }[];
  };
};
import StatusBadge from "@/app/components/StatusBadge";
export default function SSLCertificates({ data }: SSLCertificatesProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-5">SSL Certificates</h2>
      <div className="grid grid-cols-3 font-semibold text-gray-600 border-b pb-3">
        <div>Domain</div>
        <div>Expires</div>
        <div>Status</div>
      </div>
      {data.sslCertificates.map((certificate) => (
        <div
          key={certificate.id}
          className="grid grid-cols-3 py-3 border-b last:border-none"
        >
          <div>{certificate.domain}</div>
          <div>{certificate.expires}</div>
          <div>
            <StatusBadge projectStatus={certificate.status} />
          </div>
        </div>
      ))}
    </div>
  );
}
