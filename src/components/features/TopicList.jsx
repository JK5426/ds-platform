import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';

const TopicList = ({ topics }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {topics.map((topic, index) => (
        <motion.div 
          key={topic.id} 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card 
            id={topic.id}
            title={topic.title}
            tagline={topic.tagline}
            description={topic.description}
            color={topic.color}
            icon={topic.icon}
            subtopicsCount={topic.subtopics.length}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TopicList;
