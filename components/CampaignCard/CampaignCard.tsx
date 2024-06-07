import Link from 'next/link';
import React, { FC } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

import { cn } from 'utils/css';
import styles from './CampaignCard.module.scss';
import { Campaign } from 'types/News';

type CampaignCard = {
  campaignLink: Campaign['campaignLink'];
  description: Campaign['description'];
  isActive: Campaign['isActive'];
  name: Campaign['name'];
};

export const CampaignCard: FC<CampaignCard> = ({ campaignLink, description, isActive, name }) => {
  return (
    <Link
      href={campaignLink}
      target={'_blank'}
      className={cn(styles.card, { [styles.inactive]: !isActive })}
    >
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
      <div className={styles.icon}>
        <FaExternalLinkAlt />
      </div>
    </Link>
  );
};
