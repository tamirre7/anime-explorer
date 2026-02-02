import { useState } from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { ANIME_SORT } from '../../constants/animeSort';
import { SORT_LABEL } from '../../constants/sortLabels';
import { filtersStyles } from './styles';

const SORT_OPTIONS = Object.values(ANIME_SORT);

export default function Filters({ sort, onSortChange }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={filtersStyles.triggerWrap}>
        <Pressable style={filtersStyles.trigger} onPress={() => setOpen(true)}>
          <Text style={filtersStyles.triggerText}>
            Sort: {SORT_LABEL[sort] ?? 'Select'}
          </Text>
        </Pressable>
      </View>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable style={filtersStyles.overlay} onPress={() => setOpen(false)}>
          <Pressable style={filtersStyles.sheet} onPress={() => {}}>
            <Text style={filtersStyles.sheetTitle}>Sort by</Text>

            {SORT_OPTIONS.map((value) => {
              const active = value === sort;

              return (
                <Pressable
                  key={value}
                  style={filtersStyles.option}
                  onPress={() => {
                    onSortChange(value);
                    setOpen(false);
                  }}
                >
                  <Text
                    style={[
                      filtersStyles.optionText,
                      active && filtersStyles.optionTextActive,
                    ]}
                  >
                    {SORT_LABEL[value]}
                  </Text>
                </Pressable>
              );
            })}
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
}
