import { Container, FeatureBox } from '#components';

export function App() {
  return (
    <main className="h-full">
      <Container>
        <FeatureBox
          title="Scan with Ease"
          actionTitle="Document Scanner"
          description="Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format."
          linkUrl="#"
          desktopImageUrl="/img/document-scanner-lg.png"
          mobileImageUrl="/img/document-scanner.png"
          alt="Document Scanner"
        />
      </Container>
    </main>
  );
}
