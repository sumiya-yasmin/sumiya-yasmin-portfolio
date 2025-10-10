"use client"
import React from 'react';
import { CertificateCard } from './CertificateCardComponent';
import { CERTIFICATE_DATA } from '@/data/certificateData';
import { motion } from 'framer-motion'; 


const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
        staggerChildren: 0.2, 
        delayChildren: 0.1 
    } 
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export const CertificationsSection = () => {
    const cardCount = CERTIFICATE_DATA.length;

    return (
        <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto text-center">
                
                <h2 className="text-3xl font-bold mb-4">
                    My Certifications
                </h2>
                <div className="h-0.5 w-16 bg-[var(--color-accent-secondary)] mx-auto mb-4" /> 
                <p className="text-[16px] mb-12 max-w-2xl mx-auto font-normal text-[var(--color-text-secondary)]">
                    Validated expertise that anchors my technical proficiency and commitment to continuous learning.
                </p>

               
                <motion.div className={`grid grid-cols-1 gap-8 ${
                        cardCount === 1 
                            ? 'grid-cols-1 place-items-center' 
                            : 'md:grid-cols-2' 
                    }`}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible">
                   
                    {CERTIFICATE_DATA.map((certificate, index) => (
                         <motion.div key={index} variants={itemVariants}>
                             <CertificateCard data={certificate} /> 
                         </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};