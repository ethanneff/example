import {useNavigation} from '@react-navigation/native';
import React, {memo, useCallback, useState} from 'react';
import {View} from 'react-native';
import {Card, Icon, Screen, Text, TouchableOpacity} from '../../components';
import {ScrollView} from '../../conversions';
import {useColor} from '../../hooks';
import {Theme} from '../../utils';

interface SectionProps {
  title: string;
  description?: string;
  items?: string[];
}

type ChecklistItemProps = {
  item: string;
  index: number;
};

const ChecklistItem = ({item, index}: ChecklistItemProps) => {
  const [toggle, setToggle] = useState('checkbox-blank-outline');
  const onPress = useCallback(() => {
    setToggle((prev) =>
      prev === 'checkbox-marked-outline'
        ? 'checkbox-blank-outline'
        : 'checkbox-marked-outline',
    );
  }, []);
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Icon name={toggle} style={{paddingRight: Theme.padding.p02}} />
        <View style={{flex: 1}}>
          <Text title={`${index + 1}. ${item}`} />
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        {days.map((day) => (
          <View key={day} style={{flex: 1}}>
            <Text center emphasis="low" title={day} type="caption" />
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
};

const Section = ({title, description, items = []}: SectionProps) => {
  return (
    <Card>
      <Text emphasis="medium" title={title} type="caption" />

      <View style={{paddingTop: Theme.padding.p02}}>
        {description && <Text title={description} />}
        {items &&
          items.map((item, index) => (
            <ChecklistItem index={index} item={item} key={item} />
          ))}
      </View>
    </Card>
  );
};

export const Home = memo(function Home() {
  const color = useColor();
  const {goBack} = useNavigation();
  const navBack = useCallback(() => goBack(), [goBack]);

  return (
    <Screen onLeftPress={navBack} title="The One Thing">
      <ScrollView
        contentContainerStyle={{
          backgroundColor: color.light,
          paddingHorizontal: Theme.padding.p04,
          paddingVertical: Theme.padding.p02,
        }}>
        <Text
          emphasis="medium"
          style={{paddingHorizontal: Theme.padding.p04}}
          title="Purpose"
          type="h3"
        />
        <Section
          description="What’s the thing that gets you up in the morning and keeps you going when you’re tired and worn down - why you’re excited with your life?"
          title="Your Purpose"
        />
        <Text
          emphasis="medium"
          style={{paddingHorizontal: Theme.padding.p04}}
          title="Priority"
          type="h3"
        />
        <Section
          description="Your most important priority is the ONE Thing you can do right now that will help you achieve what matters most to you - big and specific"
          title="Your ONE Goal"
        />

        <Text
          emphasis="medium"
          style={{paddingHorizontal: Theme.padding.p04}}
          title="Productivity"
          type="h3"
        />
        <Section
          items={['purpose', 'goals', 'time block', 'share', 'notifications']}
          title="Immediate Reflection"
        />
        <Section
          items={[
            'Meditate and pray for spiritual energy',
            'Eat right, exercise, and sleep sufficiently for physical energy',
            'Hug, kiss, and laugh with loved ones for emotional energy',
            'Set goals, plan, and calendar for mental energy',
            'Create success list (should do) instead of todo list (could do)',
            'Prepare environment to support your goals',
            'Time block your ONE Thing for business energy',
          ]}
          title="Morning Routine"
        />
        <Section
          items={[
            'Share daily progress texts with friends/family/coach',
            'Ask great questions with big and specific',
            'Find great answers with research and role models',
            'Do your ONE goal for 4 hours each morning',
            'Protect your time block (no distractions)',
            'Protect your environment (no distractions)',
            'Be accountable (own everything)',
            'Commit to be your best with everything (mastery)',
            'Maintain healthy habits',
            'Surround yourself with people who support you',
            'Live with no regrets (purpose, priority, and productivity)',
            'Reflect on ways to improve each action',
          ]}
          title="Daily Reflection"
        />
        <Section
          items={[
            'Review your annual and monthly goals (to get on target)',
            'Time block your next week calendar (time off, you ONE thing, 1hr planning, everything else)',
          ]}
          title="Weekly Reflection"
        />
      </ScrollView>
    </Screen>
  );
});
