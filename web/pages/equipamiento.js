import React, { useState } from 'react';
import EquipmentProfile from '../components/Cards/CardEquipment';
import Gallery from '../components/gallery';
import Layout from '../components/layout';
import { equipmentQuery } from '../lib/queries';
import { getClient } from '../lib/sanity.server';
import HeroInstitucional from '../components/Heros/HeroInstitucional';
import { BG_CONSTANTS } from '../utils/constants';

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
                            <EquipmentProfile
                                key={eq._id}
                                title={eq.title}
                                body={eq.body}
                                cover={eq.imagesGallery[0]}
                                album={eq.imagesGallery}
                                selectAlbum={setSelected}
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
