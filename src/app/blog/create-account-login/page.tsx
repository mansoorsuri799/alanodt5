import { permanentRedirect } from 'next/navigation';

export default function LegacyLoginRedirect() {
  permanentRedirect('/blog/create-alano-dt-5-account-and-login');
}
