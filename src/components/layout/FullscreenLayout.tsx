import BaseLayout from './BaseLayout';

export default function FullscreenLayout(props: any) {
  return (
    <BaseLayout {...props}>
      <div className="flex h-full items-center justify-center">{props.children}</div>
    </BaseLayout>
  );
}
