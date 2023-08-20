import {UploadBox} from '@/components/app/storage/UploadBox';

export default function Storage() {
	return (
		<main className="u-full-screen-height u-flex u-flex-vertical u-gap-32 u-cross-center u-padding-64">
			<h1 className="eyebrow-heading-1 u-color-text-pink u-bold u-font-size-32">
				Ajouter au bucket la clé manquante
			</h1>
			<p className="u-font-content body-text-1 u-bold">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet
				mollis lectus ut iaculis. In neque ligula, auctor vitae lorem in,
				venenatis lobortis purus. Ut ac rhoncus ex, ut egestas leo. Mauris nec
				rutrum magna, sit amet tincidunt justo. Sed pellentesque vitae nibh eget
				imperdiet. Ut sodales commodo turpis, rutrum porttitor odio porttitor
				sed. Curabitur et turpis vitae mauris pulvinar consequat non ut ligula.
				Aenean mi orci, cursus ac libero id, consequat elementum mi. Etiam
				gravida quam eget tempus maximus. Phasellus et diam congue, accumsan
				felis eget, egestas arcu. Maecenas cursus sapien id risus faucibus
				aliquet. Proin eget dictum nulla. Phasellus odio nisi, tempor at lorem
				sed, commodo gravida tellus.
			</p>
			<UploadBox />
		</main>
	);
}
