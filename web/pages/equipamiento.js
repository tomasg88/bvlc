import React, { useState } from 'react';
import CardEquipment from 'components/CardEquipment/CardEquipment';
import Gallery from 'components/Gallery/Gallery';
import Layout from 'components/Layout/Layout';
import { equipmentQuery } from 'lib/queries';
import { getClient } from 'lib/sanity.server';
import HeroInstitucional from 'components/HeroInstitucional/HeroInstitucional';
import { BG_CONSTANTS } from 'utils/constants';

export default function Equipamiento({ equipment }) {
    const [selected, setSelected] = useState(null);

    return (
        <Layout title="Equipamiento">
            <div className="min-h-screen bg-white">
                <HeroInstitucional
                    title="Equipamiento"
                    image={BG_CONSTANTS.trucks}
                />
                <div className="max-w-full p-6 pt-24 mx-auto mt-6 bg-white md:px-12 md:p-0">
                    <div className="grid gap-4 2xl:grid-cols-2 ">
                        {equipment?.map((eq) => (
                            <CardEquipment
                                key={eq._id}
                                title={eq.title}
                                body={eq.body}
                                cover={eq.imagesGallery[0]}
                                onClick={() => setSelected(eq.imagesGallery)}
                            />
                        ))}
                    </div>
                </div>
                {selected && (
                    <Gallery
                        list={selected}
                        onClose={() => setSelected(null)}
                    />
                )}
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const equipment = await getClient().fetch(equipmentQuery);
    return {
        props: {
            equipment,
        },
    };
}
