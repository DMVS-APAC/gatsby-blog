import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default function Home() {
	return (
		<Layout>
			<article>
				<h1 className="entry-title">Sample blog news</h1>
				<p className="entry-meta">
					<time datetime="2020-09-14">September 14, 2020</time>, by <Link to="#">Administrator</Link>
				</p>

				<div className="entry-content">
					<p>Excepturi nulla, eos aperiam nec quo, officiis est, fugiat deserunt quisquam cupiditate, distinctio quo, facilisis explicabo architecto, provident deleniti ullamco dolorum consectetur pretium! Urna! Etiam facilis. Inventore tenetur, quis nullam, duis repellendus tellus eu sagittis quibusdam, quisque! Non nisl iaculis, fugit turpis proin neque eiusmod impedit dapibus irure. Consequuntur diamlorem, hac ab! Ratione possimus aut rutrum, saepe? Luctus hendrerit deleniti. Proin aliquid fermentum? Laborum proident primis fringilla hic, sociosqu etiam laudantium, urna quas adipisicing faucibus, malesuada litora facilis optio nascetur curabitur fugit fermentum cras! Inceptos curae anim molestie vero donec fusce labore, diamlorem mollitia eros, consequatur tenetur rerum? Excepteur perspiciatis.</p>

					<p>Natoque id magnam tempor fugit! Veniam viverra ex! Deleniti itaque impedit ipsam nostrud perspiciatis, minima autem praesent enim cursus enim! Morbi sollicitudin dolore autem suscipit explicabo duis? Aperiam possimus saepe et rem dolore nesciunt temporibus diamlorem, officiis dicta modi, aliquam, repellat. Euismod! Nisl sunt suspendisse atque? Possimus duis habitasse potenti fermentum hymenaeos incidunt culpa suscipit feugiat praesentium primis, mauris autem. Parturient fusce auctor commodo curabitur ut optio vehicula anim repellendus maxime, quas inceptos voluptate pellentesque facilisis possimus! Commodo, accusamus inventore. Fugiat habitasse cursus aenean? Fringilla habitasse alias sociosqu cubilia. Dui! Porro, gravida ullamcorper ipsum! Repellat possimus diamlorem minim dignissim vivamus.</p>

					<p>Penatibus cubilia luctus mollitia duis error mus varius veniam animi quisque fames. Penatibus nostrum dignissim cumque tempora, voluptas? Cillum dolore. Occaecati ligula, eos in animi euismod nostra saepe mollitia pariatur sunt quos officiis consequatur tincidunt, deserunt molestias culpa quas do cubilia mollitia vehicula placerat ridiculus nostrum tenetur exercitationem doloribus! Ab porttitor urna curabitur, aperiam, sapien esse lorem nullam laboriosam explicabo! Velit incididunt autem velit possimus fugit? Fames ultricies et habitasse eros, hac, dolores! Inventore eligendi faucibus urna ante iusto molestiae, penatibus eligendi fames arcu impedit delectus taciti nihil, maiores fringilla, justo incididunt porro nec sequi. Dis? Aliquam dis! Commodo voluptatem.</p>

					<div className="dm-player" owners="firstpost" cpeid="5df6e56e3e8c0962957f6a76" sort="recent" style={{ 'margin-bottom': '30px' }} showAdOnly="true"></div>

					<p>Excepturi nulla, eos aperiam nec quo, officiis est, fugiat deserunt quisquam cupiditate, distinctio quo, facilisis explicabo architecto, provident deleniti ullamco dolorum consectetur pretium! Urna! Etiam facilis. Inventore tenetur, quis nullam, duis repellendus tellus eu sagittis quibusdam, quisque! Non nisl iaculis, fugit turpis proin neque eiusmod impedit dapibus irure. Consequuntur diamlorem, hac ab! Ratione possimus aut rutrum, saepe? Luctus hendrerit deleniti. Proin aliquid fermentum? Laborum proident primis fringilla hic, sociosqu etiam laudantium, urna quas adipisicing faucibus, malesuada litora facilis optio nascetur curabitur fugit fermentum cras! Inceptos curae anim molestie vero donec fusce labore, diamlorem mollitia eros, consequatur tenetur rerum? Excepteur perspiciatis.</p>

					<p>Natoque id magnam tempor fugit! Veniam viverra ex! Deleniti itaque impedit ipsam nostrud perspiciatis, minima autem praesent enim cursus enim! Morbi sollicitudin dolore autem suscipit explicabo duis? Aperiam possimus saepe et rem dolore nesciunt temporibus diamlorem, officiis dicta modi, aliquam, repellat. Euismod! Nisl sunt suspendisse atque? Possimus duis habitasse potenti fermentum hymenaeos incidunt culpa suscipit feugiat praesentium primis, mauris autem. Parturient fusce auctor commodo curabitur ut optio vehicula anim repellendus maxime, quas inceptos voluptate pellentesque facilisis possimus! Commodo, accusamus inventore. Fugiat habitasse cursus aenean? Fringilla habitasse alias sociosqu cubilia. Dui! Porro, gravida ullamcorper ipsum! Repellat possimus diamlorem minim dignissim vivamus.</p>

					<p>Penatibus cubilia luctus mollitia duis error mus varius veniam animi quisque fames. Penatibus nostrum dignissim cumque tempora, voluptas? Cillum dolore. Occaecati ligula, eos in animi euismod nostra saepe mollitia pariatur sunt quos officiis consequatur tincidunt, deserunt molestias culpa quas do cubilia mollitia vehicula placerat ridiculus nostrum tenetur exercitationem doloribus! Ab porttitor urna curabitur, aperiam, sapien esse lorem nullam laboriosam explicabo! Velit incididunt autem velit possimus fugit? Fames ultricies et habitasse eros, hac, dolores! Inventore eligendi faucibus urna ante iusto molestiae, penatibus eligendi fames arcu impedit delectus taciti nihil, maiores fringilla, justo incididunt porro nec sequi. Dis? Aliquam dis! Commodo voluptatem.</p>
				</div>
			</article>
		</Layout>
	);
}
