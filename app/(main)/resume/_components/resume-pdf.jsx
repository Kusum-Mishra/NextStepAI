"use client";
import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Styling
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 11,
    fontFamily: "Helvetica",
    lineHeight: 1.4,
  },
  section: {
    marginBottom: 12,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 6,
  },
  text: {
    marginBottom: 3,
    whiteSpace: "pre-wrap",
  },
});

const Section = ({ title, children }) => (
  <View style={styles.section}>
    <Text style={styles.heading}>{title}</Text>
    {children}
  </View>
);

export const ResumePDF = ({ resume }) => {
  const {
    fullName,
    contactInfo = {},
    summary,
    skills,
    experience = [],
    education = [],
    projects = [],
  } = resume;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.section}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>{fullName || "Your Name"}</Text>
          {contactInfo.email && <Text style={styles.text}>📧 {contactInfo.email}</Text>}
          {contactInfo.mobile && <Text style={styles.text}>📱 {contactInfo.mobile}</Text>}
          {contactInfo.linkedin && <Text style={styles.text}>💼 LinkedIn: {contactInfo.linkedin}</Text>}
          {contactInfo.twitter && <Text style={styles.text}>🐦 Twitter: {contactInfo.twitter}</Text>}
        </View>

        {/* Summary */}
        {summary && (
          <Section title="Professional Summary">
            <Text style={styles.text}>{summary}</Text>
          </Section>
        )}

        {/* Skills */}
        {skills && (
          <Section title="Skills">
            <Text style={styles.text}>{skills}</Text>
          </Section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <Section title="Experience">
            {experience.map((e, idx) => (
              <View key={idx} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: "bold" }}>
                  {e.title} @ {e.organization}
                </Text>
                <Text style={styles.text}>
                  {e.startDate} - {e.current ? "Present" : e.endDate}
                </Text>
                <Text style={styles.text}>{e.description}</Text>
              </View>
            ))}
          </Section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <Section title="Education">

            {education.map((e) => {
              const degree = e.degree || e.title || "Degree";
              const school = e.school || e.organization || "School";
              const start = e.start || e.startDate || "Start";
              const end = e.end || e.endDate || "End";
              return `${degree} at ${school} (${start} - ${end})`;
            })}

          </Section>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <Section title="Projects">
            {projects.map((p, idx) => (
              <View key={idx} style={{ marginBottom: 6 }}>
                <Text style={{ fontWeight: "bold" }}>{p.title}</Text>
                <Text style={styles.text}>{p.description}</Text>
              </View>
            ))}
          </Section>
        )}
      </Page>
    </Document>
  );
};


